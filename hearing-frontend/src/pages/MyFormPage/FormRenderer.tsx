import { Box } from '@mui/material';
import FieldRenderer from './FieldRenderer';
import { useState } from 'react';

interface Field {
    id: number;
    label: string;
    field_type: string;
    required: boolean;
    options: string;
}

interface Form {
    id: number;
    title: string;
    fields: Field[];
}

interface Props {
    form: Form;
    values: { [fieldId: number]: any };
    onChange: (fieldId: number, value: any) => void;
    otherInputs: { [fieldId: number]: string };
    onOtherChange: (fieldId: number, value: string) => void;
}

const FormRenderer = ({
    form,
    values,
    onChange,
    otherInputs,
    onOtherChange,
}: Props) => {
    const [otherShown, setOtherShown] = useState<{ [fieldId: number]: boolean }>({});

    return (
        <Box display="flex" flexDirection="column" gap={4} mt={3}>
            {form.fields.map((field) => (
                <FieldRenderer
                    key={field.id}
                    field={field}
                    value={values[field.id]}
                    onChange={(value) => onChange(field.id, value)}
                    otherValue={otherInputs[field.id]}
                    onOtherChange={(value) => onOtherChange(field.id, value)}
                    showOther={otherShown[field.id]}
                    setShowOther={(show) =>
                        setOtherShown((prev) => ({ ...prev, [field.id]: show }))
                    }
                />
            ))}
        </Box>
    );
};

export default FormRenderer;
