import { Button, ButtonProps } from '@mui/material';

const GradientButton = (props: ButtonProps) => {
    return (
        <Button
            {...props}
            sx={{
                background: 'linear-gradient(90deg, #6A00F4 0%, #5F41E8 100%)',
                borderRadius: '25px',
                color: 'white',
                paddingX: 4,
                paddingY: 1.5,
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 10px rgba(106, 0, 244, 0.3)',
                '&:hover': {
                    background: 'linear-gradient(90deg, #5F41E8 0%, #6A00F4 100%)',
                    boxShadow: '0 4px 12px rgba(106, 0, 244, 0.5)',
                },
                ...props.sx, // важно: позволяет переопределять стили
            }}
        >
            {props.children}
        </Button>
    );
};

export default GradientButton;
