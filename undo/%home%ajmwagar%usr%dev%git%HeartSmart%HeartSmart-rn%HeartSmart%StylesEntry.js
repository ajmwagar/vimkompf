Vim�UnDo� ��/���4x����o%�<$���s�6�o���   H   :import styles from 'example/src/styles/SliderEntry.style';                             \N(f    _�                            ����                                                                                                                                                                                                                                                                                                                                                             \N'.    �                       �                  �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \N(e     �         H      :import styles from 'example/src/styles/SliderEntry.style';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \N(e    �         H      import styles from '';5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             \N',     �              �   )import React, { Component } from 'react';   Cimport { View, Text, Image, TouchableOpacity } from 'react-native';   #import PropTypes from 'prop-types';   ;import { ParallaxImage } from 'react-native-snap-carousel';   :import styles from 'example/src/styles/SliderEntry.style';       4export default class SliderEntry extends Component {           static propTypes = {   *        data: PropTypes.object.isRequired,           even: PropTypes.bool,   !        parallax: PropTypes.bool,   '        parallaxProps: PropTypes.object       };           get image () {   U        const { data: { illustration }, parallax, parallaxProps, even } = this.props;               return parallax ? (               <ParallaxImage   ,              source={{ uri: illustration }}   ]              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}   "              style={styles.image}   #              parallaxFactor={0.35}                  showSpinner={true}   V              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}                  {...parallaxProps}               />           ) : (               <Image   ,              source={{ uri: illustration }}   "              style={styles.image}               />   
        );       }           render () {   ?        const { data: { title, subtitle }, even } = this.props;       (        const uppercaseTitle = title ? (               <Text   B              style={[styles.title, even ? styles.titleEven : {}]}                 numberOfLines={2}               >   '                { title.toUpperCase() }               </Text>           ) : false;               return (               <TouchableOpacity                 activeOpacity={1}   0              style={styles.slideInnerContainer}   E              onPress={() => { alert(`You've clicked '${title}'`); }}                 >   .                <View style={styles.shadow} />   ]                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>   "                    { this.image }   [                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />                   </View>   [                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>   &                    { uppercaseTitle }                       <Text   P                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}   '                      numberOfLines={2}                       >   $                        { subtitle }                       </Text>                   </View>               </TouchableOpacity>   
        );       }   *}import React, { Component } from 'react';   Cimport { View, Text, Image, TouchableOpacity } from 'react-native';   #import PropTypes from 'prop-types';   ;import { ParallaxImage } from 'react-native-snap-carousel';   :import styles from 'example/src/styles/SliderEntry.style';       4export default class SliderEntry extends Component {           static propTypes = {   *        data: PropTypes.object.isRequired,           even: PropTypes.bool,   !        parallax: PropTypes.bool,   '        parallaxProps: PropTypes.object       };           get image () {   U        const { data: { illustration }, parallax, parallaxProps, even } = this.props;               return parallax ? (               <ParallaxImage   ,              source={{ uri: illustration }}   ]              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}   "              style={styles.image}   #              parallaxFactor={0.35}                  showSpinner={true}   V              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}                  {...parallaxProps}               />           ) : (               <Image   ,              source={{ uri: illustration }}   "              style={styles.image}               />   
        );       }           render () {   ?        const { data: { title, subtitle }, even } = this.props;       (        const uppercaseTitle = title ? (               <Text   B              style={[styles.title, even ? styles.titleEven : {}]}                 numberOfLines={2}               >   '                { title.toUpperCase() }               </Text>           ) : false;               return (               <TouchableOpacity                 activeOpacity={1}   0              style={styles.slideInnerContainer}   E              onPress={() => { alert(`You've clicked '${title}'`); }}                 >   .                <View style={styles.shadow} />   ]                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>   "                    { this.image }   [                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />                   </View>   [                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>   &                    { uppercaseTitle }                       <Text   P                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}   '                      numberOfLines={2}                       >   $                        { subtitle }                       </Text>                   </View>               </TouchableOpacity>   
        );       }   }5��