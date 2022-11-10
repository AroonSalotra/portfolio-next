const Layout = ({ children }: Props) => {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    );
}

export default Layout;

export interface Props {
    children: any
}