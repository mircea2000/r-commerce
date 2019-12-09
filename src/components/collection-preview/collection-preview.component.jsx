import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'
// import { withRouter } from 'react-router-dom'
const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()} 
                <span>
                    {/* I need to come back */}
                    {/* <button to={title.toLowerCase()} onClick={() => history.push('/shop/')`${title}`}>View Entire Collection >>></button> */}
                </span>
            </h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;

