export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    onClick?: () => void,
    children: React.ReactNode,
    type?: "button" | "reset" | "submit",


}