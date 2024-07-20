import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';

const Loading = (props: CircularProgressProps)=>{
    return (

        <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
                color: (theme) => {
                    return (theme.palette.primary.main === 'light' ? '#979797': '#3c3c3c');
                },
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                },
            }}
            size={40}
            thickness={4}
            {...props}
        />

    );
}
export default Loading
