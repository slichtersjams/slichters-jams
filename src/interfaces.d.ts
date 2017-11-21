interface IAppProps {

}

interface IAppState {
  showJamModal: boolean;
  currentJamImg: string;
  currentJamText: string;
}

interface IJamInputProps {
  defaultMessage: string;
  onSubmit: (jamString: string, jamResult: string, jamImg: string) => void
}

interface IJamInputState {
  jamString: string;
}

interface IJamModalProps {
  show: boolean;
  imgSrc: string;
  jamText: string;
  close: () => void;
}

interface IJamModalState {

}