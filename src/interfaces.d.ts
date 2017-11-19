interface IJamInputProps {
  defaultMessage: string;
  onSubmit: (jamString: string) => void
}

interface IJamInputState {
  jamString: string;
  jamText: string;
}

