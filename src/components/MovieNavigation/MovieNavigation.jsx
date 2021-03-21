

const MovieNavigation = () => {
  return 
}

<p> Aditional information </p>
            <ul className={styles.info}>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={{
                    pathname: `${routes.movies}/${film.id}/cast`,
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={{
                    pathname: `${routes.movies}/${film.id}/reviews`,
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>