import { useEffect, useState } from 'react';
import {
  Keyboard, KeyboardEvent,
  LayoutAnimation, LayoutAnimationConfig,
  View, ViewProps,
  Dimensions,
  Platform,
} from 'react-native';

const defaultAnimation: LayoutAnimationConfig = {
  duration: 500,
  create: {
    duration: 300,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 200
  }
};

type KeyboardSpacerProps = {
  topSpacing?: number;
  style?: ViewProps["style"];
}

const KeyboardSpacer = ({topSpacing=0, style={}} : KeyboardSpacerProps) => {
  const [ keyboardSpace, setKeyboardSpace ] = useState<number>(0)

  const updateKeyboardSpace = (event: KeyboardEvent) => {
    if (!event.endCoordinates) {
      return;
    }

    let animationConfig = defaultAnimation;
    if (Platform.OS === 'ios') {
      animationConfig = LayoutAnimation.create(
        event.duration,
        LayoutAnimation.Types[event.easing],
        LayoutAnimation.Properties.opacity,
      );
    }
    LayoutAnimation.configureNext(animationConfig);

    const screenHeight = Dimensions.get('window').height;
    const keyboardSpace = (screenHeight - event.endCoordinates.screenY) + topSpacing;
    setKeyboardSpace(keyboardSpace)
  }

  const resetKeyboardSpace = (event: KeyboardEvent) => {
    let animationConfig = defaultAnimation;
    if (Platform.OS === 'ios') {
      animationConfig = LayoutAnimation.create(
        event.duration,
        LayoutAnimation.Types[event.easing],
        LayoutAnimation.Properties.opacity,
      )
    }
    LayoutAnimation.configureNext(animationConfig)
    setKeyboardSpace(0)
  }

  useEffect(() => {
    const updateListener = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const resetListener = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const listeners = [
      Keyboard.addListener(updateListener, updateKeyboardSpace),
      Keyboard.addListener(resetListener, resetKeyboardSpace)
    ];

    return () => {
        listeners?.forEach(listener => listener.remove());
    }
  })

  return (
    <View
      style={[{
        left: 0,
        right: 0,
        bottom: 0,
        height: keyboardSpace,
      }, style]}
    />
  )
}

export default KeyboardSpacer