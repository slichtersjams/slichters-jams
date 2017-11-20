interface IAppProps {

}

interface IAppState {
  showJamModal: boolean;
}

interface IJamInputProps {
  defaultMessage: string;
  onSubmit: (jamString: string, jamResult: string, jamImg: string) => void
}

interface IJamInputState {
  jamString: string;
  jamText: string;
}

interface IJamModalProps {
  show: boolean;
  imgSrc: string;
  close: () => void;
}

interface IJamModalState {

}