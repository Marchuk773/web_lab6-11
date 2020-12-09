import successImage from '../images/check.svg';
import { Image } from '../components/reusable';
import { Container } from './SuccessPageStyle'
import { Link } from 'react-router-dom';

function SuccessPage() {
    return (
        <Container>
            <Image img={successImage} height='300px' width='300px' />
            <h1>Success!</h1>
            <div>Your order was sent to processing!</div>
            <Link to='/catalog'>
                <button>Catalog</button>
            </Link>
        </Container>
    );
}

export default SuccessPage;