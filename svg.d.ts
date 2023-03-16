declare module "*.svg" {
	export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
	export default ReactComponent;
}
