import { PlopTypes } from "@turbo/gen";
import { format } from "prettier";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("package", {
		description: "Create a new package",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name of the new package to create?",
				validate: (input: string) => {
					if (input.includes(".")) return "file name cannot include an extension";
					if (input.includes(" ")) return "file name cannot include spaces";
					if (!input) return "file name is required";

					return true;
				},
			},
			{
				type: "confirm",
				name: "component",
				message: "It will be a component?",
			},
			{
				type: "confirm",
				name: "ripple",
				message: "It will have ripple effect?",
				when: ({ component }) => component,
			},
		],
		actions: [
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/package.json",
				templateFile: "templates/package.json.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/tsup.config.ts",
				templateFile: "templates/tsup.config.ts.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/.eslintrc.cjs",
				templateFile: "templates/.eslintrc.cjs.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/.eslintignore",
				templateFile: "templates/.eslintignore.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/tsconfig.json",
				templateFile: "templates/tsconfig.json.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/src/{{#if component}}index.tsx{{else}}index.ts{{/if}}",
				templateFile: "templates/index.ts.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/src/classes.ts",
				templateFile: "templates/classes.ts.hbs",
				skip: ({ component }) => (!component ? "Non component packages do not have styles" : false),
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/turbowatch.ts",
				templateFile: "templates/turbowatch.ts.hbs",
			},
			{
				type: "modify",
				path: "{{ turbo.paths.root }}/packages/common/package.json",
				skip: ({ component }) => (!component ? "Non component packages are not added to the common package" : false),
				transform: (content: string, { name }) => {
					const pkg = JSON.parse(content);
					pkg.dependencies[`@reactjs-material/${name}`] = "workspace:^0.0.1";

					return JSON.stringify(pkg, null, 2);
				},
			},
			{
				type: "modify",
				path: "{{ turbo.paths.root }}/packages/common/src/index.ts",
				skip: ({ component }) => (!component ? "Non component packages are not added to the common package" : false),
				transform: (content: string, { name }) => {
					return content + `export * from "@reactjs-material/${name}";\n`;
				},
			},
			{
				type: "modify",
				path: "{{ turbo.paths.root }}/tsconfig.json",
				transform: (content: string, { name }) => {
					const config = JSON.parse(content);

					config.references.push({ path: `./packages/${name}` });
					config.references = config.references.sort((a: any, b: any) => a.path.localeCompare(b.path));

					return format(JSON.stringify(config), { parser: "json" });
				},
			},
		],
	});
}
