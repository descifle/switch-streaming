import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamEdit extends React.Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                {this.props.stream ? this.props.stream.title : 'Loading...'}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // streams: Object.values(state.streams),
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)