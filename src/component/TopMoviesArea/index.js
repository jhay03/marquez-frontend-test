import { DataGrid } from "@mui/x-data-grid";
import React, { Fragment } from "react";
import { toast } from "react-toastify";
import movie from "../../img/top-movies.jpg";
import { moviesColumns } from "./const";
const TopMoviesArea = () => {
  const movies = [
    {
      id: 1,
      title: "F Name",
      year: 1991,
      ratings: 100,
      views: 10,
    },
    {
      id: 2,
      title: "B Name",
      year: 1992,
      ratings: 200,
      views: 6,
    },
    {
      id: 3,
      title: "D Name",
      year: 1993,
      ratings: 300,
      views: 5,
    },
    {
      id: 4,
      title: "C Name",
      year: 1994,
      ratings: 400,
      views: 3,
    },
    {
      id: 5,
      title: "E Name",
      year: 1995,
      ratings: 500,
      views: 1,
    },
  ];

  const renderMovieTitle = () => {
    return (
      <div className="col-md-8">
        <span>
          <b>Top 5 movie with this month</b>
        </span>

        {movies.map((movie) => {
          return (
            <div className="movie-title">
              {movie.title}
              <p>({movie.year} )</p>
            </div>
          );
        })}
      </div>
    );
  };

  const renderViews = () => {
    return (
      <div className="col-md-8">
        <span onClick={sortViews}>
          <b>Views</b>
        </span>

        {movies.map((movie) => {
          return (
            <Fragment>
              <div>{movie.views}</div>
            </Fragment>
          );
        })}
      </div>
    );
  };

  const renderRatings = () => {
    return (
      <div className="col-md-8">
        <span>
          <b>Ratings</b>
        </span>

        {movies.map((movie) => {
          return (
            <Fragment>
              <div>{movie.ratings}</div>
            </Fragment>
          );
        })}
      </div>
    );
  };
  let click = 0;
  const sortViews = () => {
    click++;
    if (click === 1) {
      movies.sort((a, b) => b.ratings - a.ratings);

      movies.forEach((e) => {
        console.log(`${e.title} ${e.ratings} ${e.views}`);
      });
      console.log({ asc: click });
    } else {
      movies.sort((a, b) => a.ratings - b.ratings);

      movies.forEach((e) => {
        console.log(`${e.title} ${e.ratings} ${e.views}`);
      });
      click--;
      console.log({ desc: click });
    }
  };

  const renderMovie = () => {
    return (
      <Fragment>
        <div className="col-md-8">{renderMovieTitle()}</div>
        <div className="col-md-2">{renderViews()}</div>
        <div className="col-md-2">{renderRatings()}</div>
      </Fragment>
    );
  };
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <h2>Task 2 : Top Movies Area ( using manual function )</h2>
        <div className="col-md-5">
          <img src={movie} alt={"Movies"} />
        </div>

        <div className="col-md-7">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Top 5 Movies this month</th>
                <th scope="col">Views</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => {
                return (
                  <tr>
                    <td>
                      {movie.title} ({movie.year})
                    </td>
                    <td>{movie.views}</td>
                    <td>{movie.ratings}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-3">
        <h2>
          Task 2 : Top Movies Area ( using manual function inside the table )
        </h2>
        <div className="col-md-5">
          <img src={movie} alt={"Movies"} />
        </div>

        <div className="col-md-7">
          <div className="row">{renderMovie()}</div>
        </div>
      </div>

      <div className="row mt-3">
        <h2>Task 2 : Top Movies Area ( using datatable / datagrid )</h2>
        <div className="col-md-5">
          <img src={movie} alt={"Movies"} />
        </div>
        <DataGrid
          rows={movies}
          columns={moviesColumns}
          getRowId={(row) => row.id}
          autoHeight
        />
      </div>
    </div>
  );
};

export default TopMoviesArea;
