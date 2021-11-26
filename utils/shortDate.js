export default (dateStr) => {
	const date = new Date(dateStr)
	return date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})
}