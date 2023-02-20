
type MediaControlAttributes = {
    title: string,
    endpoint: string,
    imageSrc: string,
    isLongText: boolean,
};

export const mediaControls : MediaControlAttributes[] = [
    {
        title: 'quieter',
        endpoint: 'volume_down',
        imageSrc: 'vol_down',
        isLongText: true,
    },
    {
        title: 'prev',
        endpoint: 'prev',
        imageSrc: 'prev',
        isLongText: false,
    },
    {
        title: 'play',
        endpoint: 'play_pause',
        imageSrc: 'play',
        isLongText: false,
    },
    {
        title: 'next',
        endpoint: 'next',
        imageSrc: 'next',
        isLongText: false,
    },
    {
        title: 'louder',
        endpoint: 'volume_up',
        imageSrc: 'vol_up',
        isLongText: true,
    },
]
