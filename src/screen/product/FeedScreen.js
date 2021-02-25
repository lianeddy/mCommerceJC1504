import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardProduct} from '../../components';
import {fetchProductAction} from '../../redux/action';

const FeedScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch]);

  const {productList} = useSelector((state) => state.product);
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={productList}
      numColumns={1}
      renderItem={({item}) => (
        <CardProduct
          id={item.id}
          name={item.name}
          image={item.image[0].imagepath}
          price={item.price}
          description={item.description}
          navigation={navigation}
        />
      )}
    />
  );
};

export default FeedScreen;
