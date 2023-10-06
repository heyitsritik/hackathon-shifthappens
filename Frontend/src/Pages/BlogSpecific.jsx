import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import BlogSpecific from "../BlogSpecific(example).jpg";
import Divider from "@mui/material/Divider";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const BlogDetail = () => {
  const comment = [
    {
      user : "User",
      content : "This is for demonstration purpose"
    }
  ]
  return (
    <div>
      <Navbar />
      <br />
      <div
        className="BlogSection"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1>How will my babys movements feel, week by week?</h1>
        <h5>Author Name</h5>
        <br />
        <img style={{width: "50%"}} src={BlogSpecific} />
        <p style={{ textAlign: "center", width: "69%" }}>
          Every pregnancy is different, so it’s hard to say exactly what you’ll
          feel and when. If this is your first baby, you may not be able to feel
          much until after 20 weeks of pregnancy. However, some women can feel
          flutterings from as early as 16 weeks, especially if this is their
          second pregnancy. Here’s an idea of what to expect from your baby’s
          movements during your second trimester and third trimester. 16 weeks
          to 19 weeks You’ll probably experience some faint and fluttery
          feelings (quickening) in your tummy at around 18 weeks. They may feel
          like gentle puffs or bubbles of air being released, or you may notice
          a soft swirling or rolling sensation in your belly. If this is your
          first pregnancy, it may take a bit longer before you realise that
          those gentle little jolts and knocks are actually your baby moving
          about! Not everyone enjoys those first little flutters, however. Some
          women find them unpleasant at first, but they quickly get used to the
          sensations. 20 weeks to 23 weeks You may notice gentle kicks, or
          repetitive jerking movements when your baby gets hiccups now. As the
          weeks go by, your babys activity will gradually increase and become
          stronger. You may find that your baby becomes more lively as the day
          goes on, kicking, squirming and somersaulting the most in the evening
          as you relax. Another top time for movements is just before or at
          mealtimes. As your pregnancy progresses, youll come to recognise your
          babys pattern of activity. 24 weeks to 28 weeks At this point in your
          pregnancy your baby still has plenty of space to move around freely.
          You’re likely to notice frequent movements and feel that your baby is
          very active. Limb movements may feel punchy, while whole-body
          movements may be smoother. You may even notice your little one jumping
          at loud, sudden noises! If you havent felt your baby move by 24
          weeks, call your midwife. They should check your babys heartbeat to
          make sure all is well. 29 weeks to 31 weeks Your baby is likely to be
          making sharper, more definite movements now, such as strong kicks and
          pushes. Over the coming weeks, you may feel as if they’re fighting for
          space, as they run out of wriggle room in your womb (uterus). It may
          even be possible to see ripples of movement across your belly as your
          baby turns. 32 weeks to 35 weeks This may be the most exciting time
          for feeling your baby move, as at 32 weeks your babys movements will
          be at their peak. Afterwards, the frequency of your babys movements
          will stay roughly the same until you give birth. As your baby grows
          and has less room to move, you may notice that the type of movement
          you feel changes. But you should still feel them moving as often as
          before. Your baby’s movements may start to feel more sustained or
          slower due to lack of space. But they should still feel hard, strong
          and powerful in the weeks leading up to the birth and you should feel
          your baby wriggling around! If their thumb pops out of their mouth,
          you may feel their head darting from side to side as they try to find
          it again. You may also notice that your baby develops a regular time
          of the day when they’re most active. 36 weeks to 40 weeks If this is
          your first baby, they will probably take up their final head-down
          position at around 36 weeks, if they havent already. The firm muscles
          of your womb and tummy will help to keep them in place. It may feel as
          if theres a melon pressing on your pelvic floor!
        </p>
        <br />
        <Divider>
          <LocalFloristOutlinedIcon />
        </Divider>
        <h2 style={{paddingRight : "66rem"}}>
          Comments
        </h2>
        {comment.map(val => {
          (<div style={{paddingRight : "55rem"}}>
            {val.user} : {val.content} {}
          </div>)
        })}
      </div>
      <br />
      <Footer />
    </div>
  );
};
export default BlogDetail;
