import { Component } from "react";

class Denomination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            message: '',
            results: []
        }

        this.denominations = [1, 5, 10, 20, 50, 100, 200];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
            results: [1],
            message: ''
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { amount } = this.state;

        // vérification que c'est bien un entier
        if (parseInt(amount) != amount) {

            this.setState({
                message: `${amount} is not a valid amount`
            })

            return;
        }

        this.setState({
            results: this.calcul(amount),
            amount: ''
        })
    }

    calcul(N) {

        const results = [{ 'amount': N }];

        for (const d of this.denominations.reverse()) {
            let nbD = Math.floor(N / d);
            if (nbD >= 1) {
                N = N - d * nbD;
                results.push({ 'token': d, 'count': nbD });
            }
        }

        return results;
    }

    render() {
        const { amount, results, message } = this.state;
        return (
            <div>
                <p>{message}</p>
                <h2>Tokens: {this.denominations.join(', ')}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label >Amount</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={amount}
                        name="amount"
                    />
                    <button>Ok</button>
                </form>

                { results.length > 0 && (
                    <>
                        <h3>Amount : {results[0].amount}</h3>
                        {results.slice(1).map((t, i) => (
                            <p key={i}>Token : {t.token} Count : {t.count}</p>
                        ))}
                    </>
                )}
            </div>
        )


    }
}

export default Denomination;