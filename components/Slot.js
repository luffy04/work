import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

class Slot extends React.Component {
  render() {
    const { navigation, slot, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];
    console.log("In slot")

    return (
      <Block row={horizontal} card flex style={[styles.slot, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Slot', { slot: slot })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: slot.image }} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Slot', { slot: slot })}>
          <Block flex space="between" style={styles.slotDescription}>
            <Text size={14} style={styles.slotTitle}>{slot.title}</Text>
            <Text size={12} muted={!priceColor} color={priceColor}>{slot.price}</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(Slot);

const styles = StyleSheet.create({
  slot: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  slotTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  slotDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});