import { Link } from "react-router-dom";

export default function LoginBtn() {
  return (
    <Link to={"/register"} className="text-primary">
      <button className="rounded-md bg-[var(--primary)] px-5 py-2 text-center text-base font-medium text-white hover:bg-accent">
        Регистрация
      </button>
    </Link>
  );
}
