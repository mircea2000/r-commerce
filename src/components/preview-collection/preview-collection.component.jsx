import React from 'react';
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'
import { Link } from 'react-router-dom'
const PreviewCollection = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()} 
                <span>
                    {/* I need to come back */}
                    <Link to={title.toLowerCase()}>View Entire Collection >>></Link>
                </span>
            </h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    );
};

export default PreviewCollection;