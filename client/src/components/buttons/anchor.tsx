type AnchorProps = {
  children: JSX.Element | string,
  href: string,
}

function Anchor ({ children, href }: AnchorProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
}

export default Anchor;