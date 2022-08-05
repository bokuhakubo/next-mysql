// import { parseISO, format } from 'date-fns'

export default function Created({ dateString }) {
  const date = new Date(dateString).toLocaleString();
  return <time dateTime={date}>{date}</time>
}