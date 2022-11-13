const Layout = ({ children }: Props) => {
    return (
            <section>
                {children}
            </section>
    );
}

export default Layout;

export interface Props {
    children: any
}