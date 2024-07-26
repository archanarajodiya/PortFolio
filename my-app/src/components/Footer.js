
export default function Footer() {
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString(); 

	return (
		<section className="footer" >
			<p className="font-bold">
			© {formattedDate}
			</p>
		</section>
	);
}
