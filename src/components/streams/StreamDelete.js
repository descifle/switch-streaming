import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'
// import StreamForm from './StreamForm'
import Modal from '../Modal'
import history from '../../history'
import { Link } from 'react-router-dom'

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
                <Link to={'/'} className="ui button">Cancel</Link>   
            </React.Fragment>
        )
    }

    renderContent() {
        return !this.props.stream ? 'Are you sure you want to delete this stream?' : `Are you sure you want to delete this stream : ${this.props.stream.title}`
    }

    render() {

        return (
            <Modal
            title={'Delete Stream'} 
            content={this.renderContent()}
            actions={this.renderActions()}
            dismiss={() => history.push('/')}
             />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)