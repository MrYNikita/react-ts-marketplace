import * as SC from './style';
import { PropsWithChildren } from "react";

interface IHeader {

    title: string,

};

const Header = ({ children, title, }: PropsWithChildren<{}>&IHeader) => {

    return (
        <SC.Header>
            <SC.Title>{title}</SC.Title>
            {children}
        </SC.Header>
    );

};

export default Header;