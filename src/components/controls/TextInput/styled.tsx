import { TextField as MaterialTextField } from '@mui/material'
import { styled } from '@mui/material/styles';

export const TextField = styled(MaterialTextField)({
  '& label': {
    fontFamily: 'Arial',
    fontWeight: 700,
    fontSize: 15,
    color: '#000000'
  },
})