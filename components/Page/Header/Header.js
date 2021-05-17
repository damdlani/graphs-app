import Link from "next/link";

export const Header = () => {
  return (
    <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/public">
            <a>Public graph</a>
          </Link>
        </li>
        <li>
          <Link href="/private">
            <a>Private graph</a>
          </Link>
        </li>
      </ul>
  );
}