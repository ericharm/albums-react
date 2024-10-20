import { Link } from './../ui/Link';

export interface LoginLinkProps {
    onClickLogin: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const LoginLink: React.FC<LoginLinkProps> = ({ onClickLogin }) => (
    <Link onClick={onClickLogin}>Log In</Link>
);
