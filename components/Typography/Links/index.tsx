import Link from 'next/link';

export interface LinkProps {
  /**
   * The text which will be displayed in the link.
   */
  text: string;
  /**
   * The URL which will be opened when the link is clicked.
   */
  href: string;
  /**
   * The type of the link by which is decided to use internal link by next js or normal a tag
   * for extrenal website links.
   */
  type: 'internal' | 'external';

  /** Aria label for link when custom aria label is required */
  ariaLabel?: string;
}

const className = 'transform duration-500 ease-in-out';

/**
 * A custom link component to maintain the type of link and design pattern across the code.
 *
 * @param {props} props - The properties of the component.
 * @param {string} props.text - The text to display on the link.
 * @param {string} props.href - The href of the link.
 * @param {string} props.type - The type of link.
 * @param {string} [props.ariaLabel] - The aria label for the link.
 */
export default function LinkComponent({
  text,
  href,
  type,
  ariaLabel,
}: LinkProps) {
  switch (type) {
    case 'internal':
      return (
        <Link href={href}>
          <a className={className} aria-label={ariaLabel ? ariaLabel : text}>
            {text}
          </a>
        </Link>
      );
    case 'external':
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={className}
          aria-label={ariaLabel ? ariaLabel : text}
        >
          {text}
        </a>
      );
    default:
      return null;
  }
}
