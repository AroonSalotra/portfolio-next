const Layout = ({ children }: Props) => {
    return (
        <section className="container-main">
            {children}
        </section>
    );
}

export default Layout;

export interface Props {
    children: any
}