import TextField from '@mui/material/TextField';

const LoginInput = ({ label, type, value, onChange }) => (
  <TextField label={label} type={type} value={value} onChange={onChange} fullWidth />
);

export default LoginInput;
