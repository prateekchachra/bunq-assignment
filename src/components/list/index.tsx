import React from 'react';
import { Chat, User } from "types";

export type ListProps = {
    title: string;
    items: User[] | Chat[];
    renderItem: (item: any) => JSX.Element;
}


export const List = ({ title, items, renderItem } : ListProps) => {
    
    return (
        <div>
            <p>{title}</p>
            <ul>
                {items.map(item =>  renderItem(item))}
            </ul>
        </div>
    )
}