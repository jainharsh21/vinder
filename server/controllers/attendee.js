module.exports.getAllAttendeesFromEvent = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const data = await db.query(
      `SELECT s.name,s.imageurl FROM attendees a JOIN users s ON a.stu_id=s.id WHERE a.event_id = ${req.params.event_id}`
    );
    res.send(data.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        "We are expreincing issues please try again or contact the technical team",
    });
  }
};

module.exports.addAttendee = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const data = await db.query(`INSERT INTO public.attendees(
        event_id, stu_id, didattend)
        VALUES ('${req.body.event_id}', '${req.body.stu_id}', ${req.body.didAttend});`);
    console.log(data);
    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        "We are expreincing issues please try again or contact the technical team",
    });
  }
};
