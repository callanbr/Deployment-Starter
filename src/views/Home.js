import React, { Fragment } from 'react';
import TopNav from '../components/TopNav/TopNav';
import Button from '@material-ui/core/Button';
import HeaderDisplay from '../components/HeaderDisplay/HeaderDisplay';
import Container from '../components/Container/Container.js';

export default function Home(props) {
  return (
    <Fragment>
      <TopNav
        brand='Deployment-Starter'
        fixed
        color='transparent'
        colorOnScroll={{
          height: 50,
          color: 'light',
        }}
        rightLinks={<Button style={{ color: 'inherit' }}>Link</Button>}
      />
      <HeaderDisplay halfView image={require('../Assets/Images/code.png')} />
      <Container
        raised
        style={{ maxWidth: '1200px', margin: '-30vh auto 0px' }}
      >
        <div style={{ padding: '15px' }}>
          <h1>Deployment-Starter</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lobortis, mauris eget auctor suscipit, sem est ultricies nulla, non
            vestibulum urna mauris ac ipsum. Nullam magna justo, ultrices ut
            consequat a, condimentum eu ipsum. Nunc gravida rutrum nulla eu
            mollis. Cras nulla ipsum, eleifend a faucibus eget, hendrerit quis
            leo. Etiam id mi ac dui lobortis maximus nec ut metus. Pellentesque
            ullamcorper odio purus, vel elementum diam dignissim nec.
            Pellentesque euismod urna eget augue mollis bibendum. Aenean sed
            luctus justo. Vestibulum nisl diam, luctus vehicula nunc at,
            accumsan volutpat ipsum. Cras sem eros, volutpat at laoreet quis,
            placerat at tellus. Donec et quam nisi.
          </p>
          <p>
            Curabitur dictum mattis lectus tincidunt malesuada. Nam quis mollis
            turpis. Sed eget sem sit amet mauris luctus feugiat. Sed quis velit
            consequat, suscipit ante non, accumsan nisl. Aenean bibendum ex ac
            enim vestibulum, ac sodales metus ornare. Pellentesque bibendum,
            lorem hendrerit elementum scelerisque, turpis libero fermentum
            sapien, vel facilisis risus nunc ac lectus. Pellentesque non
            fermentum lacus, ac dignissim enim.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin
            augue erat, congue ut finibus ac, posuere at nisi. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aliquam erat volutpat. Praesent vitae enim nisi. Nam
            id risus blandit, pellentesque arcu sit amet, cursus ex. Fusce
            faucibus, dolor eget accumsan gravida, lorem dolor tincidunt sapien,
            sit amet lacinia diam turpis eu erat. Quisque ac aliquet nibh. Sed
            et ipsum vel risus mattis euismod eu ac nulla.
          </p>
          <p>
            Mauris mollis ligula convallis risus efficitur, at pharetra nulla
            aliquam. Vivamus odio felis, pulvinar auctor dolor facilisis, luctus
            fringilla arcu. Etiam pharetra nisi vitae faucibus pharetra. Vivamus
            posuere porta erat non suscipit. In sit amet rhoncus elit.
            Vestibulum eleifend elit dolor, sed maximus massa auctor ac.
            Phasellus sit amet mauris at massa condimentum varius. Nulla ut
            aliquam arcu, vitae dictum ante. Maecenas tempor tristique urna a
            laoreet.
          </p>
          <p>
            Vestibulum pharetra molestie vehicula. Etiam nibh erat, vehicula at
            ornare sed, pellentesque sed erat. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Aliquam feugiat sollicitudin leo, sed fermentum arcu
            dictum eget. Duis tempus augue non nunc porttitor, nec malesuada
            sapien semper. Cras aliquet quam nec tortor pretium, id dictum massa
            scelerisque. Etiam in odio luctus diam vehicula mattis scelerisque
            vel odio. Aliquam erat volutpat. Phasellus pharetra tempor
            hendrerit. Morbi molestie in odio et blandit.
          </p>
          <Button> Learn more! </Button>
        </div>
      </Container>
    </Fragment>
  );
}
