'use strict';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useCameraDevice,
  Camera,
  useCameraPermission,
  useMicrophonePermission,
  useCameraFormat,
} from 'react-native-vision-camera';
import {
  useNavigation,
  useIsFocused,
  useFocusEffect,
} from '@react-navigation/native';
import SVG_FLASHLIGHT_ON from '../../../assets/images/svgs/camera_flash_on';
import SVG_FLASHLIGHT_OFF from '../../../assets/images/svgs/camera_flash_off';
import {styles} from './styles';
import ViewImage from '../../../components/Media/Image/ViewImage';
const Camera_Screen = () => {
  const screen = Dimensions.get('screen');
  const navigation = useNavigation();
  const [imageData, setImageData] = useState('');
  const [videoData, setVideoData] = useState('');
  const [flashlight, setFlashlight] = useState('off');
  const [isActive, setIsActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const {
    hasPermission: hasCameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();
  const {
    hasPermission: hasMicrophonePermission,
    requestPermission: requestMicrophonePermission,
  } = useMicrophonePermission();
  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => {
        setIsActive(false);
      };
    }, []),
  );
  const camera = useRef(null);
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {height:screen.height, width:screen.width},
    pixelFormat:'native'}
  ]);
  useEffect(() => {
    if (!hasCameraPermission) requestCameraPermission();
    if (!hasMicrophonePermission) requestMicrophonePermission;
  }, [hasCameraPermission, hasMicrophonePermission]);
  if (!hasCameraPermission || !hasMicrophonePermission)
    return <ActivityIndicator style={StyleSheet.absoluteFill} />;
  if (!device) return <Text>Kamera və ya Mikrofon icazəsi alın</Text>;

  const handletakePhoto = async () => {
    if (isRecording) {
      camera.current?.stopRecording();
      return;
    }
    const photo = await camera.current?.takePhoto({
      flash: flashlight,
    });
    setImageData(photo.path);
    console.log('camm: ',photo.path);
  };
  const handleRecordVideo = async () => {
    if (!camera.current) return;
    setIsRecording(true);
    camera.current.startRecording({
      videoCodec: 'h265',
      videoBitRate: 'low',
      flash:flashlight,
      onRecordingFinished: video => {
        console.log(video);
        setIsRecording(false);
        setVideoData(video.path)
      },
      onRecordingError: error => {
        console.error(error);
        setIsRecording(false);
      },
    });
  };
  // {
  //   videoData && (
  //     // <Video
  //     //   source={require(videoData)}
        
  //     // />
  //     <></>
  //   )
  // }
  {
    imageData && (
      <ViewImage image={imageData}/>
    )
  }
  return (
    <View style={{flex: 1}}>
      <Camera
        key={camera?.id}
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        photo={true}
        video={true}
        audio={true}
      />
      <Pressable
        style={[
          styles.takeButton,
          {backgroundColor: isRecording ? '#ff0000' : '#ffffff'},
        ]}
        onPress={() => {
          handletakePhoto();
        }}
        onLongPress={() => {
          handleRecordVideo();
        }}
      />
      <Pressable
        style={styles.flashButton}
        onPress={() => {
          setFlashlight(flashlight === 'off' ? 'on' : 'off');
        }}>
        {flashlight === 'off' ? <SVG_FLASHLIGHT_OFF /> : <SVG_FLASHLIGHT_ON />}
      </Pressable>
    </View>
  )
};

export default Camera_Screen;
