var add_note = (title, body) => {
    console.log('Adding Note', title, body);
}

var delete_note = (title) => {
    console.log('Removing Note');
}

var list_notes = () => {
    console.log('Listing All Notes:')
}

module.exports = {
    add_note,
    delete_note,
    list_notes
}