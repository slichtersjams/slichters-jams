interface IJamInputProps {
  defaultMessage: string;
  onSubmit: (jamString: string, jamResult: string) => void
}

interface IJamInputState {
  jamString: string;
  jamText: string;
}

interface IJamModalProps {
  show: boolean;
  imgSrc: string;
}

interface IJamModalState {

}