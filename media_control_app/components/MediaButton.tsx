import { Button, TouchableOpacity, Text, Image, ImageSourcePropType} from "react-native";
import { onClickAPIRequest } from "../utils/mediaControlRequest";
import { styled } from 'nativewind';

type MediaButtonProps = {
    apiParams: {
        hostname: string,
        endpoint: string,
    }
    title: string,
    imageSrc: string,
    className: string,
    isLongText: boolean,
}

const imageSources = {
    'play': require('../assets/play.png'),
    'pause': require('../assets/pause.png'),
    'next': require('../assets/next.png'),
    'prev': require('../assets/prev.png'),
    'vol_up': require('../assets/vol_up.png'),
    'vol_down': require('../assets/vol_down.png'),
    'mute': require('../assets/mute.png'),
}; 

export const MediaButton: React.FC<MediaButtonProps> = ({apiParams: { hostname, endpoint }, title, className, imageSrc, isLongText}) => {
    const StyledButton = styled(TouchableOpacity);
    const StyledText = styled(Text);

    return <>
        <StyledButton onPress={() => onClickAPIRequest(hostname, endpoint)} className={`${className} flex justify-center m-4 p-8 font-extrabold`}>
            {/**@ts-ignore */}
            <Image source={imageSources[imageSrc]} 
                style={{width: 40, height: 40}}
            />
            <StyledText className={`text-white font-medium${isLongText ? "" : " ml-2"}`}>{title}</StyledText>
        </StyledButton>
    </>
}