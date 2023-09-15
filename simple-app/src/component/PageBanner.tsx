import { User } from './../types/User';

type PageBannerProps = {
  user: User;
  theme: string;
};

export function PageBanner(props: PageBannerProps): JSX.Element {
  return (
    <header>
      <h2>Minimum viable product gym app; hope you like it so far!</h2>
      <p>
        Welcome {props.user.role} {props.user.username}
      </p>
    </header>
  );
}
