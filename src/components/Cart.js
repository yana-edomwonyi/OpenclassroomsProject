import '../styles/Cart.css'
function Cart() {
	const traineeExpirience = 0
	const juniorExpirience = 1
	const intermediateExperience = 3
    const seniorExpirience = 10
	return (
		<div className='jh-cart'>
			<h2>Cart</h2>
			<ul>
				<li>Trainee developer with years of expirience : {traineeExpirience}</li>
				<li>Junior developer with years of expirience : {juniorExpirience}</li>
				<li>Intermediate developer with years of expirience : {intermediateExperience}</li>
                <li>Senior developer with years of expirience : {seniorExpirience}</li>
			</ul>
			Team total years of development experience: {traineeExpirience + juniorExpirience + intermediateExperience + seniorExpirience}
		</div>
	)
}

export default Cart