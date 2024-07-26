export default function Skills() {
	const skills = ["HTML", "CSS", "Javascript", "React", "NodeJs", "C/C++"];
	return (
		<section id="skills">
			<h2 className="my-skills">
				My Skills...
			</h2>
			<div>
				{skills.map((skill, index) => {
					return (
						<div key={index}>
							{skill}
						</div>
					)})}
			</div>
		</section>
	)
}
