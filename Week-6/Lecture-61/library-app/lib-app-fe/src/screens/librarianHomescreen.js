import {Link} from "react-router-dom";

const LibrarianHomeScreen = () => {

return (
<>
<h1>Welcome Librarian</h1>

<div className="ui cards">

<div className="card">

<div className="content">

<div className="header">

<Link to={"/add-book"}>Add New Book</Link>

</div>

<div className="description"> Adds a new book in the library.</div>

</div>
</div>
</div>
<div className="ui cards">

<div className="card">

<div className="content">

<div className="header">

<Link to={"/books"}>list of  books</Link>

</div>

<div className="description"> see the list of all the books in the library.</div>

</div>
</div>
</div>

</>
);
};

export default LibrarianHomeScreen;