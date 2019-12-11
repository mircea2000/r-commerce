import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from'../../components/collection-item/collection-item.component'
const CollectionPage = ({ collections }) => {
  // console.log(collections)
  const {title, items, backgroundUrl} = collections;
  // console.log(imageUrl)
  return (
    <div className='collection-page'>
      <h2 className='title' style={{backgroundImage: `url(${backgroundUrl})`}}>{title}</h2>
      <div className='items'>
        {
          items.map(item=> (
            <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
