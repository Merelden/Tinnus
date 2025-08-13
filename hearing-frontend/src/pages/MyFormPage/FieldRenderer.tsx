import {
    TextField, Typography, Box, Checkbox, RadioGroup, FormGroup,
    FormControlLabel, Radio
} from '@mui/material';

interface Field {
    id: number;
    label: string;
    field_type: string;
    required: boolean;
    options: string;
}

interface Props {
    field: Field;
    value: any;
    onChange: (value: any) => void;
    otherValue?: string;
    onOtherChange?: (value: string) => void;
    showOther?: boolean;
    setShowOther?: (show: boolean) => void;
}

const FieldRenderer = ({
    field, value, onChange, otherValue,
    onOtherChange, showOther, setShowOther,
}: Props) => {
    const options = field.options.split(',').map(o => o.trim());
    const label = `${field.label}${field.required ? ' *' : ''}`;

    if (field.field_type === 'text' || field.field_type === 'textarea') {
        return (
            <TextField
                fullWidth
                multiline={field.field_type === 'textarea'}
                rows={field.field_type === 'textarea' ? 4 : 1}
                label={label}
                required={field.required}
                variant="outlined"
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                sx={{ fontSize: '32px', my: 1 }}
            />
        );
    }

    if (field.field_type === 'checkbox') {
        return (
            <Box>
                <Typography sx={{ mb: 1, fontWeight: 'bold', fontSize: '32px' }}>{label}</Typography>
                <FormGroup>
                    {options.map((opt, i) => {
                        const isOther = opt.toLowerCase().includes('другое');
                        const checked = (value || []).includes(opt);
                        return (
                            <Box key={i}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(e) => {
                                                const newValue = e.target.checked
                                                    ? [...(value || []), opt]
                                                    : value.filter((v: string) => v !== opt);
                                                onChange(newValue);
                                                if (isOther && setShowOther) setShowOther(e.target.checked);
                                            }}
                                        />
                                    }
                                    label={opt}
                                />
                                {isOther && showOther && (
                                    <TextField
                                        fullWidth
                                        size="small"
                                        label="Уточните"
                                        variant="outlined"
                                        value={otherValue || ''}
                                        onChange={(e) => onOtherChange?.(e.target.value)}
                                        sx={{ mt: 1 }}
                                    />
                                )}
                            </Box>
                        );
                    })}
                </FormGroup>
            </Box>
        );
    }

    if (field.field_type === 'radio') {
        return (
            <Box>
                <Typography sx={{ mb: 1, fontWeight: 'bold', fontSize: '32px' }}>{label}</Typography>
                <RadioGroup value={value || ''} onChange={(e) => onChange(e.target.value)}>
                    {options.map((opt, idx) => (
                        <FormControlLabel key={idx} value={opt} control={<Radio />} label={opt} />
                    ))}
                </RadioGroup>
            </Box>
        );
    }

    return null;
};

export default FieldRenderer;
