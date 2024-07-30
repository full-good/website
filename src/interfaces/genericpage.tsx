interface IGenericPage {
    name: string;
    icon:  React.ReactNode;
    href: string;
    component: React.FC;
}

export default IGenericPage