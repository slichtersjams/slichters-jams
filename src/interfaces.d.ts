interface IJamInputProps {
  defaultMessage: string;
  onSubmit: (jamString: string, jamResult: string) => void
}

interface IJamInputState {
  jamString: string;
  jamText: string;
}

interface IJamModalProps {
  imgSrc: string
}

interface IJamModalState {

}