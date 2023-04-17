import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
export default Section;

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
